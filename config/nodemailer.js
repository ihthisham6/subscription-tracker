import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = 'ihthitysschool2016@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ihthitysschool2016@gmail.com',
    pass: EMAIL_PASSWORD
  }
})

export default transporter;