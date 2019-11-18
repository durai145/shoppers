import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  fileData: File;
  ngOnInit() {
  }


  constructor(private http: HttpClient) { }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0];
  }

  onSubmit() {
    alert('Submit');
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log(this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      });
  }

}
