// controllers/OtpController.js

const Otp = require('../models/otp');

class OtpController {
  static async create(req, res) {
    try {
      const otp = await Otp.create(req.body);
      res.status(201).json(otp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const otps = await Otp.getAll();
      res.status(200).json(otps);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const otp = await Otp.getById(req.params.id);
      if (!otp) {
        return res.status(404).json({ error: 'OTP not found' });
      }
      
      res.status(200).json(otp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async postById(req, res) {
    try {
      const otp = await Otp.postBYId(req.params.id);
      if (!otp) {
        return res.status(404).json({ error: 'OTP not found' });
      }
      
      res.status(200).json(otp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const otp = await Otp.update(req.params.id, req.body);
      if (!otp) {
        return res.status(404).json({ error: 'OTP not found' });
      }
      res.status(200).json(otp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const otp = await Otp.delete(req.params.id);
      if (!otp) {
        return res.status(404).json({ error: 'OTP not found' });
      }
      res.status(200).json(otp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OtpController;
