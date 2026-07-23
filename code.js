// code.js

const project = "Operating System Analyzer";

function createLog() {
    const now = new Date();

    const log = {
        time: now.toISOString(),
        project: project,
        status: "running",
        message: "System check completed"
    };

    console.log(log);

    return log;
}

// Jalankan pertama kali
createLog();

// Buat log setiap 1 menit
setInterval(() => {
    createLog();
}, 60000);
