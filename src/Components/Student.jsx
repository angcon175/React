import PropTypes from 'prop-types'


const Student = ({name,age}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Student
