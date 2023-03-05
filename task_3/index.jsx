import { Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }: IProps) => {
    console.log("ChildComponent has been updated. Memoization is not working.");

    return (
      <div>
        user name: {name}, user age: {age || "unknown"}
      </div>
    );
  }, ({ user: prev }, { user: next }) => {
    const { name: prevName, age: prevAge } = prev;
    const { name: nextName, age: nextAge } = next;
    return prevName === nextName && prevAge === nextAge;
  });
