import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {isArray} from "rxjs/internal-compatibility";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: string[]
  // @Input('backendErrors') backendErrorsProps: BackendErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    console.log('backendErrorsProps: ', this.backendErrorsProps)
    console.log('typeof: ', typeof this.backendErrorsProps)
    console.log('isArray: ', isArray(this.backendErrorsProps))

    this.errorMessages = !(
      !isArray(this.backendErrorsProps) &&
      typeof this.backendErrorsProps == 'string'
    )
      ? this.backendErrorsProps
      : [this.backendErrorsProps];

    // this.errorMessages = Object.keys(this.backendErrorsProps).map(
    //   (name: string) => {
    //     const messages = this.backendErrorsProps[name].join(' ')
    //     return `${name} ${messages}`
    //   }
    // )
  }
}
