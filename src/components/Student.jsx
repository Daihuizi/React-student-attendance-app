const Student = (props) => {
  const attendanceButtonClicked = () => {
    props.onPresenceToggle(props.id);
  };

  const nameColor = props.isPresent ? 'green' : 'red';

  return (
    <div>
      <ul>
        <li style={{ color: nameColor }}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>

      <button onClick={attendanceButtonClicked}>
        Toggle if {props.name} is present
      </button>
    </div>
  );
};

export default Student;
