#!/bin/bash
tmux new-session -c "$(realpath "$(dirname "$0")")" -d -s geeko 'nodemon -e js'
