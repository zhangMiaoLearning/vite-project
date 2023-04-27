import axios from 'axios';

export const request = axios.create({
	baseURL: 'http://localhost:3004',
	timeout: 15000,
});
