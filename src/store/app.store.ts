import { computed, inject, Signal } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { PartialStateUpdater, patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { Feature } from '@model/feature';
//
// Model
//

//
// Services
//
import { LnJsonService } from '@service/ln-json/ln-json.service';
import { query } from '@angular/animations';


//
// type: AppState
//
type AppState = {
    company: string;
    entity: string;
    features: Feature[];
    filter: { query: string; order: 'asc' | 'desc' };
    loading: boolean;
};

//
// InitialState
//
const initialState: AppState = {
    company: 'OfrendaGroup',
    entity: 'LLC',
    features: [],
    filter: { query: '', order: 'asc' },
    loading: false,
};

//
// SetFilter
//
export const SetFilter =
    (filter: {
        query: string;
        order: 'asc' | 'desc';
    }): PartialStateUpdater<{ filter: { query: string; order: 'asc' | 'desc' } }> =>
    (state) => {
        let o = { ...state.filter, filter };

        debugger;

        return { filter: o };
    };

//
// factoryCompare
//
const factoryCompare = (filter: { order: 'asc' | 'desc' }) => {
    const direction = filter.order === 'asc' ? 1 : -1;
    const asc: boolean = direction === 1;
    const desc: boolean = direction === -1;
    const compare = (a: { label: string }, b: { label: string }) => {
        const aLower = a.label.toLowerCase();
        const bLower = b.label.toLowerCase();

        if (aLower < bLower) return asc ? -1 : 1;
        if (aLower > bLower) return asc ? 1 : -1;
        return 0;
    };

    return compare;
};
//
// AppStore
//
export const AppStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ filter }) => ({
    })),
    withMethods((store, jsonService: LnJsonService = inject(LnJsonService)) => ({
    }))
);
