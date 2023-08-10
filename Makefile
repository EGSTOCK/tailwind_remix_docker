# 環境構築
init:
	docker-compose run --rm app yarn install --frozen-lockfile
	docker compose up -d --build
# docker compose 起動
up:
	docker compose up -d
# docker compose シャットダウン
down:
	docker compose down --remove-orphans
# remix コンテナ に入る
app:
	docker compose exec app bash
