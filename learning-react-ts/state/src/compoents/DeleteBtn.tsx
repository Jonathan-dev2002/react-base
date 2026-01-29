interface Props {
  onClickDelete: () => void;
}

function DeleteBtn({ onClickDelete }: Props) {
  return <button onClick={onClickDelete}>Delete Now</button>;
}

export default DeleteBtn;