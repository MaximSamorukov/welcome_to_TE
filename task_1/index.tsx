import React, { Component, PureComponent } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = React.memo(function FirstComponent({
  name,
  age,
}: IUser) {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

const SecondComponent = React.memo(
  function SecondComponent({ user: { name, age } }: IProps) {
    console.log("SecondComponent has been updated");

    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  },
  (prev, next) => {
    const {
      user: { name: prevName, age: prevAge },
    } = prev;
    const {
      user: { name: nextName, age: nextAge },
    } = next;
    return prevName === nextName && prevAge === nextAge;
  }
);

// class component
export class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(next) {
    const newUser = next.user;
    const prevUser = this.props.user;
    const { name: prevName, age: prevAge } = prevUser;
    const { name: nextName, age: nextAge } = newUser;
    return prevName !== nextName || prevAge !== nextAge;
  }
  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}

export { FirstComponent, SecondComponent };
