import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { UserProfileComponent } from '../user-profile-presentation/user-profile/user-profile.component';

@Injectable()
export class UserProfilePresenterService {

  constructor(public overlay: Overlay) { 
  }

  // assign overlay
  public viewProfileOverlay(profileBtnRef: HTMLButtonElement) {
    const componentRef: ComponentRef<UserProfileComponent> = this.overlayConfig(profileBtnRef);
  }

  public overlayConfig(profileBtn: HTMLButtonElement): ComponentRef<UserProfileComponent> {
    const overlayConfig: OverlayConfig = new OverlayConfig();

    /* ConnectedPostionStrategy */
    // overlayConfig.positionStrategy = this.overlay.position().flexibleConnectedTo(profileBtn)
    //   .withPositions(
    //     [
    //       {
    //         panelClass: 'top-right',
    //         originX: 'start',
    //         originY: 'bottom',
    //         overlayX: 'end',
    //         overlayY: 'top',
    //         offsetX: 50,
    //         offsetY: 5


    //         originX: 'center',
    //         originY: 'center',
    //         overlayX: 'center',
    //         overlayY: 'center'
    //       }
    //     ]
    //   );


    /* GlobalPostionStrategy */
    overlayConfig.positionStrategy = this.overlay.position().global()
      .centerHorizontally()
      .centerVertically();

    overlayConfig.hasBackdrop = true;

    const overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<UserProfileComponent> = new ComponentPortal<UserProfileComponent>(UserProfileComponent);
    const componentRef: ComponentRef<UserProfileComponent> = overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
