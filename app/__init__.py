from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

from app import routes