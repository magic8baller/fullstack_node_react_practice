#!/bin/bash

echo "Configuring dragonstackdb"

dropdb -U dragon_user dragonstackdb
createdb -U dragon_user dragonstackdb

psql -U dragon_user dragonstackdb < ./bin/sql/generation.sql
psql -U dragon_user dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb CONFIGURED"