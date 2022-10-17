
  const contactHandler = async (req: any, res: any) => {
    require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: '1stlightfishman@gmail.com',
      pass: process.env.fishman_password,
    },
    secure: true,
  })
  const mailData = {
    from: '1stlightfishman@gmail.com',
    to: 'info@1stlightfishing.com',
    subject: `${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    phone: `Message From ${req.body.phone}`,
    name: `Message From ${req.body.name}`,
    html: `
    <div>Sender:${req.body.name}</div>
    <div>Phone:${req.body.phone}</div>
    <div>Subject:${req.body.subject}</div>
    <div>Message:${req.body.message}</div>
    <p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err:any, info:any) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
  
  }
  
  
  export default contactHandler