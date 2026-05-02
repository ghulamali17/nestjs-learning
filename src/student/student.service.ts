import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Ali',
      age: 23,
    },
    {
      id: 2,
      name: 'Ahmed',
      age: 23,
    },
    {
      id: 3,
      name: 'Basit',
      age: 23,
    },
    {
      id: 4,
      name: 'suban',
      age: 23,
    },
    {
      id: 5,
      name: 'bilal',
      age: 23,
    },
  ];

  //   get
  getAllStudents() {
    return this.students;
  }

  //   get by id
  getStudentByID(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('student not found');
    return student;
  }

  //   Create
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  //   update
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student id not found');
    this.students[index] = { id, ...data };
    return this.students[index];
  }
  //   patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentByID(id);
    Object.assign(student, data);
    return student;
  }
  //   delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student id not found');
    const deleted = this.students.splice(index, 1);
    return { message: 'student deleted successfully', student: deleted[0] };
  }
}
