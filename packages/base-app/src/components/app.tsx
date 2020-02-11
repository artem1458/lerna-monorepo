import React, { PureComponent } from 'react';
import { SuperButton } from 'ui-components';
import { sum } from '@utils';

export interface IAppProps {
    startAmount?: number;
}

export interface IAppState {
    amount: number[];
}

export class App extends PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            amount: [props.startAmount || 0],
        }
    }

    incState = () => this.setState(state => ({ amount: [...state.amount, 1] }));

    getAmount = () => sum(this.state.amount);

    render(): JSX.Element {
        const {  } = this.state;
        return (
            <SuperButton className="button" onClick={this.incState}>
                { this.getAmount() }
            </SuperButton>
        );
    }
}
