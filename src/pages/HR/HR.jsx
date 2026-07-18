import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import DataTable from '../../components/ui/DataTable';
import SearchBar from '../../components/ui/SearchBar';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import FormField from '../../components/ui/FormField';
import Badge from '../../components/ui/Badge';
import { employees as initialEmployees, departments } from '../../data/employees';
import './HR.css';

const statusVariant = {
  Active: 'success',
  'On Leave': 'warning',
  Inactive: 'danger',
};

const columns = [
  {
    key: 'name',
    label: 'Employee',
    render: (val, row) => (
      <div className="employee-cell">
        <div className="employee-cell__avatar">
          {val.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="employee-cell__name">{val}</div>
          <div className="employee-cell__email">{row.email}</div>
        </div>
      </div>
    ),
  },
  { key: 'department', label: 'Department' },
  { key: 'role', label: 'Role' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => <Badge variant={statusVariant[val] || 'default'}>{val}</Badge>,
  },
  {
    key: 'attendance',
    label: 'Attendance',
    render: (val) => (
      <div className="attendance-cell">
        <div className="attendance-bar">
          <div
            className="attendance-bar__fill"
            style={{
              width: `${val}%`,
              background: val >= 95 ? '#10B981' : val >= 85 ? '#F59E0B' : '#EF4444',
            }}
          />
        </div>
        <span>{val}%</span>
      </div>
    ),
  },
  {
    key: 'performance',
    label: 'Rating',
    render: (val) => (
      <div className="rating-cell">
        <span className="rating-cell__star">★</span>
        <span>{val}</span>
      </div>
    ),
  },
];

const emptyForm = { name: '', email: '', phone: '', department: '', role: '', status: 'Active' };

export default function HR() {
  const [employeesList, setEmployeesList] = useState(initialEmployees);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModal, setViewModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filtered = employeesList.filter((emp) => {
    const matchSearch = emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'All Departments' || emp.department === deptFilter;
    return matchSearch && matchDept;
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (editingEmployee) {
      setEmployeesList(employeesList.map(e => e.id === editingEmployee.id ? { ...e, ...form } : e));
    } else {
      setEmployeesList([...employeesList, { ...form, id: Date.now(), attendance: 0, performance: 0, joinDate: new Date().toISOString().slice(0, 10) }]);
    }
    setModalOpen(false);
    setEditingEmployee(null);
    setForm(emptyForm);
  };

  const openEdit = (emp) => {
    setEditingEmployee(emp);
    setForm({ name: emp.name, email: emp.email, phone: emp.phone, department: emp.department, role: emp.role, status: emp.status });
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setEmployeesList(employeesList.filter(e => e.id !== deleteModal.id));
    setDeleteModal(null);
  };

  return (
    <div className="hr-page" id="hr-page">
      <div className="hr-page__toolbar">
        <div className="hr-page__filters">
          <SearchBar value={search} onChange={setSearch} placeholder="Search employees..." />
          <div className="hr-page__dept-filter">
            <Filter size={16} />
            <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
        <Button icon={Plus} onClick={() => { setEditingEmployee(null); setForm(emptyForm); setModalOpen(true); }}>
          Add Employee
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        onEdit={openEdit}
        onDelete={(emp) => setDeleteModal(emp)}
        onView={(emp) => setViewModal(emp)}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingEmployee(null); }}
        title={editingEmployee ? 'Edit Employee' : 'Add Employee'}
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>{editingEmployee ? 'Update' : 'Add Employee'}</Button>
          </>
        }
      >
        <div className="hr-form-grid">
          <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
          <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <FormField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <FormField label="Department" name="department" type="select" value={form.department} onChange={handleChange} options={departments.filter(d => d !== 'All Departments')} required />
          <FormField label="Role" name="role" value={form.role} onChange={handleChange} required />
          <FormField label="Status" name="status" type="select" value={form.status} onChange={handleChange} options={['Active', 'On Leave', 'Inactive']} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal isOpen={!!viewModal} onClose={() => setViewModal(null)} title="Employee Details" size="md">
        {viewModal && (
          <div className="employee-details">
            <div className="employee-details__header">
              <div className="employee-details__avatar">
                {viewModal.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3>{viewModal.name}</h3>
                <p>{viewModal.role}</p>
              </div>
              <Badge variant={statusVariant[viewModal.status] || 'default'}>{viewModal.status}</Badge>
            </div>
            <div className="employee-details__grid">
              <div className="detail-item"><span className="detail-label">Email</span><span>{viewModal.email}</span></div>
              <div className="detail-item"><span className="detail-label">Phone</span><span>{viewModal.phone}</span></div>
              <div className="detail-item"><span className="detail-label">Department</span><span>{viewModal.department}</span></div>
              <div className="detail-item"><span className="detail-label">Join Date</span><span>{viewModal.joinDate}</span></div>
              <div className="detail-item"><span className="detail-label">Attendance</span><span>{viewModal.attendance}%</span></div>
              <div className="detail-item"><span className="detail-label">Performance</span><span>★ {viewModal.performance}</span></div>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={!!deleteModal}
        onClose={() => setDeleteModal(null)}
        title="Confirm Delete"
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteModal(null)}>Cancel</Button>
            <Button variant="danger" onClick={confirmDelete}>Delete</Button>
          </>
        }
      >
        <p>Are you sure you want to delete <strong>{deleteModal?.name}</strong>? This action cannot be undone.</p>
      </Modal>
    </div>
  );
}
