import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">Activities</h1>
      <table className="table table-striped table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Activity Type</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity._id}</td>
              <td>{activity.activity_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
