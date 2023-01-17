import {Component, Input} from '@angular/core';
import { Storage } from "@aws-amplify/storage"

@Component({
  selector: 'amplify-s3-image',
  templateUrl: './amplify-s3-image.component.html',
  styleUrls: ['./amplify-s3-image.component.scss']
})
export class AmplifyS3ImageComponent {
  @Input() key: string;
  url: string = null;
  async ngOnInit() {
    this.url = await Storage.get(this.key, {
      level: 'private',
      download: false
    });
  }
}
