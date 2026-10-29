import Student from './Student';

const StudentList = (props) => {
  return (
    <section>
      <h2>Students</h2>
      <ul>
        {props.students.map((student) => (
          <li key={student.id}>
            <Student
              id={student.id}
              name={student.nameData}
              email={student.emailData}
              isPresent={student.isPresentData}
              onPresenceToggle={props.onStudentPresenceToggle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StudentList;
