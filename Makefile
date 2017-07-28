bin := node_modules/.bin/

infra:
	$(call log,"Starting services ...")
	docker-compose up -d
	$(call log,"Services started.")

stop-infra:
	$(call log,"Stopping services ...")
	docker-compose stop
	$(call log,"Services stopped.")

restart-infra: stop-infra infra

clean-infra: stop-infra
	$(call log,"Removing docker containers ...")
	docker-compose rm -f
	$(call log,"Removing docker containers finished.")

lint:
	$(call log,"Running ESLint ...")
	$(bin)eslint --ext .js ./src ./tests
	$(call log,"ESLint run completed.")


lint-fix:
	$(call log,"Running ESLint Fix ...")
	$(bin)eslint --ext .js ./src ./tests --fix
	$(call log,"ESLint Fix run completed.")

.PHONY:
	infra
	stop-infra
	restart-infra
	clean-infra
	lint
	lint-fix