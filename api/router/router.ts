import express from 'express';
import BaseRouter from './base-router';
import AuthRoutes from './routes/auth';

class Routes extends BaseRouter {
  constructor() {
    super(express());
  }

  getRequests = [];
  postRequests = [...AuthRoutes(this.app)];
}

export default Routes;
