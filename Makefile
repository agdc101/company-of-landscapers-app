up:
	@echo "Installing Packages..."
	npm install

	@echo "copy .env.example to .env"
	cp .env.example .env

	@echo "Starting vite server..."
	npm run dev