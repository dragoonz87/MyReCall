use axum::{
    extract::{Path, State},
    response::Redirect,
    routing::{get, post},
    Form, Json, Router,
};
use axum_error::Result;
use serde::{Deserialize, Serialize};
use sqlx::SqlitePool;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;

#[tokio::main]
async fn main() -> Result<()> {
    let _ = dotenv::dotenv();
    let url = std::env::var("DATABASE_URL")?;
    let pool = SqlitePool::connect(&url).await?;

    let app = Router::new()
        .route("/", get(list))
        .route("/create/:user_id", post(create))
        .route("/delete/:id", get(delete))
        .route("/update/:id", post(update))
        .with_state(pool)
        .layer(CorsLayer::very_permissive());
    let address = SocketAddr::from(([0, 0, 0, 0], 8000));
    axum::Server::bind(&address)
        .serve(app.into_make_service())
        .await?;
    Ok(())
}

#[derive(Serialize, Deserialize)]
struct Flashcard {
    id: Option<i64>,
    key: String,
    definition: String,
}

async fn list(State(pool): State<SqlitePool>) -> Result<Json<Vec<Flashcard>>> {
    match sqlx::query_as!(
        Flashcard,
        "SELECT id, key, definition FROM flashcards ORDER BY id"
    )
    .fetch_all(&pool)
    .await
    {
        Ok(flashcards) => Ok(Json(flashcards)),
        Err(err) => Ok(Json(vec![Flashcard {
            id: None,
            key: format!("DB error"),
            definition: err.to_string(),
        }])),
    }
}

async fn create(
    State(pool): State<SqlitePool>,
    Path(user_id): Path<i64>,
    Form(flashcard): Form<Flashcard>,
) -> Result<Redirect> {
    match sqlx::query!(
        "INSERT INTO flashcards (key, definition, user_id) VALUES (?, ?, ?)",
        flashcard.key,
        flashcard.definition,
        user_id
    )
    .execute(&pool)
    .await
    {
        Ok(_) => Ok(Redirect::to("http://localhost:5173")),
        Err(_) => Ok(Redirect::to("http://localhost:5173/error")),
    }
}

async fn delete(State(pool): State<SqlitePool>, Path(id): Path<i64>) -> Result<Redirect> {
    match sqlx::query!("DELETE FROM flashcards WHERE id = ?", id)
        .execute(&pool)
        .await
    {
        Ok(_) => Ok(Redirect::to("http://localhost:5173")),
        Err(_) => Ok(Redirect::to("http://localhost:5173/error")),
    }
}

async fn update(
    State(pool): State<SqlitePool>,
    Path(id): Path<i64>,
    Form(flashcard): Form<Flashcard>,
) -> Result<Redirect> {
    match sqlx::query!(
        "UPDATE flashcards SET key = ?, definition = ? WHERE id = ?",
        flashcard.key,
        flashcard.definition,
        id
    )
    .execute(&pool)
    .await
    {
        Ok(_) => Ok(Redirect::to("http://localhost:5173")),
        Err(_) => Ok(Redirect::to("http://localhost:5173/error")),
    }
}
