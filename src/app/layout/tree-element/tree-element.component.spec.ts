import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeElementComponent } from './tree-element.component';
import {SharedModule} from '../../shared/shared.module';

describe('TreeElementComponent', () => {
  let component: TreeElementComponent;
  let fixture: ComponentFixture<TreeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        TreeElementComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
