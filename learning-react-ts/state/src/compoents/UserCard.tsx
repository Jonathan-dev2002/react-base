interface UserCardProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
}

export default function UserCard({ id, name, onDelete }: UserCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, margin: 5 }}>
        <span>{name}</span>
        <button onClick={() => onDelete(id)}>delete now</button>
    </div>
  );
}
