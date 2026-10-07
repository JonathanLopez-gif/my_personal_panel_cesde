function Profile({name, program, city}) {
    return (
        <section className="profile">
            <h2>Personal information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Program:</strong> {program}</p>
            <p><strong>City:</strong> {city}</p>
        </section>
    )
}

export default Profile