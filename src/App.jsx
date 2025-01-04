import { useEffect, useState } from 'react';
import { Aikiam, Coming_Soon, Kalaama, Kaloolsavm, our_logo, Coming_Soon_lap, date } from './assets';
import { Home, NotFound, Result, Schedule, Stage, ScoreBoard } from './pages';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/stage/:id" element={<Stage />} />
      <Route path="/scoreboard" element={<ScoreBoard />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
