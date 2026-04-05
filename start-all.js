import { spawn } from 'child_process';

const server = spawn('node', ['server.js'], { stdio: 'inherit', shell: true });
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
    server.kill('SIGINT');
    vite.kill('SIGINT');
    process.exit();
});

process.on('SIGTERM', () => {
    server.kill('SIGTERM');
    vite.kill('SIGTERM');
    process.exit();
});
