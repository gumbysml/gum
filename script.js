body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  margin: 0;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
  color: #333;
}

#games-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.game-card {
  background: white;
  width: 220px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-thumbnail {
  width: 100%;
  height: 130px;
  object-fit: cover;
}

.game-info {
  padding: 15px;
}

.game-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  min-height: 48px;
}

.btn-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-bottom: 15px;
}

button {
  cursor: pointer;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.play-btn {
  background-color: #28a745;
  color: white;
}

.play-btn:hover {
  background-color: #218838;
}

.view-btn {
  background-color: #007bff;
  color: white;
}

.view-btn:hover {
  background-color: #0056b3;
}
