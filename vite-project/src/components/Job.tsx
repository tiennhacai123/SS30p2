interface Props {
    name: string;
    id: number;
    status: boolean;
  }
  
  export default function Job(props: Props) {
    const { name, status, id } = props;
  
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{status ? "Hoàn thành" : "Chưa hoàn thành"}</td>
      </tr>
    );
  }
  