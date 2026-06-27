.PHONY: run-backend run-frontend install-backend install-frontend install

install-backend:
	cd backend && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt

install-frontend:
	npm install

install: install-backend install-frontend

run-backend:
	@test -x backend/.venv/bin/uvicorn || $(MAKE) install-backend
	cd backend && .venv/bin/uvicorn app.main:app --reload --host 127.0.0.1 --port 8000

run-frontend:
	npm run dev
