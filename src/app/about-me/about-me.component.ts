import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  title = 'materialApp'; 
  color = 'accent';
  mode = 'determinate';
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }


  onClick() : void {
    this.resumeService.getUser().subscribe(data => {
      const byteCharacters = atob(data.resume);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'resume.pdf';
      window.open(link.href);
    })
}
}
