import { useState, useEffect } from "react";
import Jobs from './components/Jobs';

type Job = {
  name: string;
  id: number;
  status: boolean;
};

export default function App() {
  const [name, setName] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const handleClick = () => {
    const newJob: Job = {
      name: name,
      id: Math.floor(Math.random() * 1000000),
      status: false,
    };
    setJobs(prevJobs => {
      // Nếu prevJobs không phải là một mảng, trả về một mảng mới chứa newJob
      if (!Array.isArray(prevJobs)) {
        return [newJob];
      }
      // Nếu prevJobs là một mảng, sao chép và thêm newJob vào cuối mảng
      return [...prevJobs, newJob];
    });
    setName("");
  };

  useEffect(() => {
    // Lưu dữ liệu vào local storage mỗi khi jobs thay đổi
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <div>
      <h1>Quản lý công việc</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên công việc"
      />
      <button onClick={handleClick}>Thêm công việc</button>
      <Jobs jobs={jobs} />
    </div>
  );
}