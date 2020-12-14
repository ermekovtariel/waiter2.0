import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  Login,
  Schools,
  TeacherGrade,
  TeacherAttendance,
  GradeHistory,
  AttendanceHistory,
  LiveCount,
} from './pages';
import { Container, Sidebar } from './components';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <Sidebar />
        <Switch>
          <Container>
            <Route path={'/'} component={Schools} exact />
            <Route
              path={'/schools/:school_id/grade'}
              component={TeacherGrade}
              exact
            />
            <Route
              path={'/schools/:school_id/attendance'}
              component={TeacherAttendance}
              exact
            />
            <Route
              path={'/teachers/:teacher_id/grade'}
              component={GradeHistory}
              exact
            />
            <Route
              path={'/teachers/:teacher_id/attendance'}
              component={AttendanceHistory}
              exact
            />
            <Route path={'/live-count'} component={LiveCount} exact />
            <Redirect to={'/'} />
          </Container>
        </Switch>
      </>
    );
  }
  return (
    <Switch>
      <Route path={'/'} component={Login} exact />
      <Redirect to={'/'} />
    </Switch>
  );
};
