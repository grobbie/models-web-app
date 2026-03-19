import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { KubeflowModule } from 'kubeflow';
import { NamespaceService, SnackBarService } from 'kubeflow';
import { MWABackendService } from 'src/app/services/backend.service';
import { SubmitFormComponent } from './submit-form.component';
import { of } from 'rxjs';

let MWABackendServiceStub: Partial<MWABackendService>;
let NamespaceServiceStub: Partial<NamespaceService>;

MWABackendServiceStub = {
  postInferenceService: () => of(),
};

NamespaceServiceStub = {
  getSelectedNamespace: () => of(),
};

describe('SubmitFormComponent', () => {
  let component: SubmitFormComponent;
  let fixture: ComponentFixture<SubmitFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitFormComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        KubeflowModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
      ],
      providers: [
        { provide: MWABackendService, useValue: MWABackendServiceStub },
        { provide: NamespaceService, useValue: NamespaceServiceStub },
        { provide: SnackBarService, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
