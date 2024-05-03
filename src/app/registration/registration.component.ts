import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {
  showModal = false;
  private modalSubscription: Subscription;

  constructor(
    private modalService: ModalService,
    private cd: ChangeDetectorRef  // ChangeDetectorRef Injection
  ) {
    this.modalSubscription = this.modalService.watch().subscribe(status => {
      this.showModal = status;
      this.cd.detectChanges();  // Trigger change detection manually
    });
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  closeModal() {
    this.modalService.close();
  }
}
