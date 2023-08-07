from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
ip install flask-migrate
app = Flask(__name__)

from app import routes, models