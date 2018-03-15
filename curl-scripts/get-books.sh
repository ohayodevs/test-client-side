#!/bin/bash

curl "https://wdi-library.herokuapp.com/books" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

echo
