import React from 'react'
import { Form, Input } from "antd"
const Register = () => {
  // form handler
  const onfinishHandler = (values) => {
    console.log(values)
  }
  return (
  <div className="form-container">
    <Form layout="vertical" onFinish={onfinishHandler}>
    <h1>Register From</h1>
    <Form.Item label="Name" name="name">
     <Input type='text' required />
     </Form.Item>
     <Form.Item label="Email" name="email">
     <Input type="email" required />
     </Form.Item>
     <Form.Item label="Password" name="password">
     <Input type="password" required />
     </Form.Item>
     <button className="btn btn-primary" type="submit">
      Register
     </button>
     
    </Form>
  </div>
  )
}

export default Register
