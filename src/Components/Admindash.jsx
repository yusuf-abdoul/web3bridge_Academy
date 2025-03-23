import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Admindash = () => {
    const navigate = useNavigate();
    const students = JSON.parse(localStorage.getItem('students')) || [];



    useEffect(() => {
        if (!localStorage.getItem('isAdmin')) {
            navigate('/admin');
        }
    }, [navigate]);

    return (
        <div className="bg-gray-400 max-w-7xl mx-auto mt-8 p-8 border rounded-lg shadow-lg sm:max-w-[70%] sm:p-8">
            <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
            <button
                onClick={() => navigate('/admin')}
                className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200 mb-4 sm:w-auto"
            >
                Logout
            </button>
            <h3 className="text-xl font-medium mb-4">Registered Students</h3>
            {students.length === 0 ? (
                <p>No students registered yet.</p>
            ) : (
                <div className='overflow-x-auto'>
                    <table className="min-w-full bg-white border border-gray-200 text-left">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">PhoneNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} className="text-left">
                                    <td className="py-2 px-4 border-b">{student.name}</td>
                                    <td className="py-2 px-4 border-b">{student.email}</td>
                                    <td className="py-2 px-4 border-b">{student.phoneNumber}</td>
                                    <td className="py-2 px-4 border-b space-x-2 flex justify-center" >
                                        <button
                                            onClick={() => 
                                                navigate(`/edit/${index}`)}
                                            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                students.splice(index, 1);
                                                localStorage.setItem('students', JSON.stringify(students));
                                                navigate('/admin');
                                            }}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Admindash;