import Job from "./Job";

interface Props {
  jobs: {
    id: number;
    name: string;
    status: boolean;
  }[]; // Chỉnh sửa Props để jobs là một mảng của các công việc
}

export default function Jobs(props: Props) {
  const { jobs } = props;

  // Kiểm tra nếu jobs không phải là một mảng, trả về một thông báo hoặc hiển thị một cách phù hợp
  if (!Array.isArray(jobs)) {
    return <div>Dữ liệu công việc không hợp lệ</div>;
  }

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên công việc</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <Job
              key={job.id}
              id={job.id}
              name={job.name}
              status={job.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}