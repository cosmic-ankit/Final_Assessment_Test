import React, { useEffect, useState } from 'react';

const LandingPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (name && username) {
            setUsers([...users, { id: users.length + 1, name, username }]);
            setName('');
            setUsername('');
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navigation Bar */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-world-wide-web-icon-icons-and-png-backgrounds-18.png" alt="LOGO" style={{ width: '50px', height: '50px' }} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#section1">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section2">Form</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Person Details Section */}
            <div id="section1" className="flex-grow-1 py-5">
        <div className="container">
          <div className="row">
            {/* Display user details here */}
            {users.map((user) => (
              <div key={user.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


            <div id="section2" className="py-5">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group my-2">
                            <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary my-2">Submit</button>
                    </form>
                </div>
            </div>

            <div>
                <h1>About US</h1>
                <div className="container my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque maxime animi veritatis exercitationem, inventore qui doloribus quos ratione aut repudiandae omnis earum nobis magni dignissimos nam aspernatur. At eos nemo laboriosam maxime blanditiis rerum ratione cum placeat dolorem quam.

                </div>
            </div>


            {/* Footer */}

            <footer className="bg-light text-dark py-3">
                <div className="container text-center">
                    Created by @Ankit Jain
                </div>
            </footer>
            {/* ... */}
        </div>
    );
};

export default LandingPage;









































