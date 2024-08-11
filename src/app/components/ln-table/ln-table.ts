import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy,
    EventEmitter,
    Input,
    Output,
    SimpleChange,
    ViewEncapsulation,
    TemplateRef,
    Type,
    ChangeDetectionStrategy,
} from '@angular/core';
//
// Lernender/Cdk
//
import { Table } from '@lernender/cdk';
import { LnCdkBase } from '@components/ln-cdk-base/ln-cdk-base';
//
// lernender/Core
//
import { TableColumn, Constant, Library, TableSchema, TableRow, Action, Response } from '@lernender/core';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Component({
    standalone: true,
    selector: 'ln-table',
    templateUrl: 'ln-table.html',
    styleUrls: ['ln-table.scss'],
})

//
// TmTable
//
export class LnTable extends LnCdkBase implements OnInit, OnDestroy, OnChanges {
    /**
     * getTable()
     */
    public get table() {
        return this._table;
    }
    @Input() public disabled: boolean;
    @Input() public contentType: any;
    @Input() public hideHeader: boolean = false;
    @Input() public border: boolean = false;
    @Input() public label: string = '';
    @Input() public schema: TableSchema = new TableSchema();
    @Input() public actions: Action[];
    @Input() public template: Content<any> | undefined;
    @Output() public onAdd: EventEmitter<any> = new EventEmitter();
    @Output() public onRow: EventEmitter<any> = new EventEmitter();
    @Output() public onDblClick: EventEmitter<any> = new EventEmitter();
    @Output() public onActive: EventEmitter<any> = new EventEmitter();
    @Output() public onHeader: EventEmitter<any> = new EventEmitter();
    @Output() public onEdit: EventEmitter<any> = new EventEmitter();
    @Output() public onDelete: EventEmitter<any> = new EventEmitter();
    @Output() public onIcon: EventEmitter<any> = new EventEmitter();
    @Output() public onLink: EventEmitter<any> = new EventEmitter();
    @Output() public onSelect: EventEmitter<any> = new EventEmitter();
    @Output() public onReady: EventEmitter<any> = new EventEmitter();
    @Output() public onRowSelected: EventEmitter<any> = new EventEmitter();
    @Output() public onRowChecked: EventEmitter<any> = new EventEmitter();

    /**
     * Private Variables
     */
    private _table: Table | undefined;
    private _prevent: boolean = false;
    private _timer: any;

    /**
     * constructor()
     */
    constructor() {
        super();
        this.disabled = false;
        this.label = '';
        this.actions = [];
        this.style = {};
    }

    //
    // Public Variables
    //

    //
    // hasLabel()
    //
    public hasLabel() {
        return Library.isStringWithLength(this.label);
    }

    /**
     * getCheckedRows()
     */
    public getCheckedRows() {
        return this._table?.getChecked();
    }

    /**
     * getComponentType()
     */
    public getComponentType(): any {
        return Constant.ComponentType;
    }

    /**
     * getDirectionType()
     */
    public getDirectionType(): any {
        return Constant.Direction;
    }

    /**
     */
    public handleHeader(column: TableColumn) {
        //
        // If we have a valid Sort TableColumn
        //
        if (!column.sort.disabled) {
            //
            // Flip the Direction
            //
            column.sort.toggleDirection();
            //
            // Set the Active TableColumn
            //
            this._table?.setActiveColumn(column);
            //
            // Set the Active TableColumn
            //
            this._table?.sort(column);
            //
            // Emit Header click event IFF Column is sortable
            //
            if (Library.isDefined(this.onHeader)) {
                this.onHeader.emit(column);
            }
        }
    }

    /**
     */
    public handleActive(row: TableRow) {
        //
        // Enable/Disable the active flag
        //
        if (this.schema.rowSelection === Constant.GridSchemaSelection.Single) {
            this._table?.setActive(row);
        } else {
            row.active = !row.active;
        }

        //
        // Event: OnActive
        //
        if (Library.isDefined(this.onActive)) {
            this.onActive.emit(row);
        }
    }

    //
    // handleAdd
    //
    public handleAdd($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onAdd)) {
                this.onAdd.emit($event);
            }
        }
    }

    //
    // handleDblClick()
    //
    public handleDblClick(row: TableRow) {
        clearTimeout(this._timer);
        this._prevent = true;
        //
        // Event: OnSelect
        //
        if (Library.isDefined(this.onDblClick)) {
            this.onDblClick.emit(row);
        }
    }

    //
    // handleRowSelected
    //
    public handleRowSelected(row: TableRow) {
        this._timer = setTimeout(() => {
            if (!this._prevent) {
                if (Library.isDefined(row)) {
                    //
                    // If multi select then toggle the selected state
                    //
                    if (!(this.schema.rowSelection === Constant.GridSchemaSelection.Single)) {
                        row.selected = !row.selected;
                    } else {
                        const selected = this._table?.getSelected();
                        if (Library.isArrayWithLength(selected)) {
                            if (selected && selected[0].uid === row.uid) {
                                row.selected = !row.selected;
                            } else {
                                this._table?.setSelected(row);
                            }
                        } else {
                            this._table?.setSelected(row);
                        }
                    }

                    //
                    // Emit selected row if caller wants to be informed.
                    //
                    if (Library.isDefined(this.onRowSelected)) {
                        setTimeout(() => {
                            this.onRowSelected.emit({
                                selected: this._table?.getSelected(),
                            });
                        }, 20);
                    }
                }
                this._prevent = false;
            }
        }, 200);
    }
    //
    // handleEdit
    //
    public handleEdit($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onEdit)) {
                this.onEdit.emit($event);
            }
        }
    }
    //
    // handleDelete
    //
    public handleDelete($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onDelete)) {
                this.onDelete.emit($event);
            }
        }
    }
    //
    // handleIcon
    //
    public handleIcon($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onIcon)) {
                this.onIcon.emit($event);
            }
        }
    }
    //
    // handleLink
    //
    public handleLink($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onLink)) {
                this.onLink.emit($event);
            }
        }
    }
    //
    // handleSelect()
    //
    public handleSelect($event: any) {
        if (Library.isDefined($event)) {
            if (Library.isDefined(this.onSelect)) {
                this.onSelect.emit($event);
            }
        }
    }

    //
    // handleFilterSearch()
    //
    public handleFilterSearch($event: any) {
        if (Library.isDefined($event)) {
        }
    }

    //
    // ngOnChanges
    //
    public ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        //
        // Initialize Component
        //
        if (Library.isDefined(changes?.['data'])) {
            if (Library.isDefined(changes?.['data'].currentValue)) {
                //
                // _initTable()
                //
                this._initTable();
                /**
                 * Register Data Event Listener
                 */
                this.registerDataEventHandler((response: any) => {
                  if (this._table != undefined) {
                      //
                      // Clear Array
                      //
                      this._table.data.slice(0, this._table.data.length);

                      if (Library.hasOwnProperty(response, 'data'))
                          this._table.data = response?.data.map((r: any) => new TableRow({ data: r }));
                      else if (Library.isArray(response))
                          this._table.data = response?.map((r: any) => new TableRow({ data: r }));
                  }
                });
            }
        }
    }

    public ngAfterViewInit() {
        //
        // Enable Column Resizing
        //
        //this._table?.colResize();
    }
    //
    // ngOnInit()
    //
    public ngOnInit() {
        this._initTable();
    }
    //
    // _initTable()
    //
    private _initTable() {
        if (!Library.isDefined(this._table)) {
            //
            // Initialize Component
            //
            this._table = new Table(
                this.schema?.columns.map((col) => {
                    return new TableColumn(col);
                })
            );
        }
    }
}
