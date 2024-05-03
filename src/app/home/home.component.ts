import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalService } from '../modal.service'; // Correct the import path based on your project structure

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
  registerForm: FormGroup;
  isImageValid: boolean = false;
  tags: string[] = [];
  tagInput: string = '';
  showModal: boolean = false;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.registerForm = this.fb.group({
      // Initialize other form controls here
    });

    // Subscribe to modalService status updates
    this.modalService.watch().subscribe((status: boolean) => {
      this.showModal = status;
    });
  }

  onFileChange(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        const height = img.height;
        const width = img.width;
        if (width === 310 && height === 325) {
          this.isImageValid = true;
          console.log('Image is valid');
        } else {
          this.isImageValid = false;
          console.error('Invalid image dimensions. Image must be exactly 310x325 pixels.');
          alert('Invalid image dimensions. Image must be exactly 310x325 pixels.');
        }
      };
     
    }
  }

  addTag() {
    if (this.tagInput.trim() !== '' && !this.tags.includes(this.tagInput)) {
      this.tags.push(this.tagInput.trim());
      this.tagInput = '';
    }
  }

  onSubmit() {
    if (this.registerForm.valid && this.isImageValid) {
      console.log('Form Submitted', this.registerForm.value);
      // proceed with further actions, like sending data to a server
    }
  }

  openRegistrationModal() {
    this.modalService.open();
  }

  closeModal() {
    this.modalService.close();
  }
  
}
