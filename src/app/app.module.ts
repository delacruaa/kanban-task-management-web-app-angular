import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeSwitcherComponent } from './components/UI/theme-switcher/theme-switcher.component';
import { LogoIconComponent } from './components/UI/svg/logo-icon/logo-icon.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { DropdownComponent } from './components/UI/dropdown/dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoardIconComponent } from './components/UI/svg/board-icon/board-icon.component';
import { BoardButtonComponent } from './components/UI/board-button/board-button.component';
import { EyeCloseIconComponent } from './components/UI/svg/eye-close-icon/eye-close-icon.component';
import { EyeButtonComponent } from './components/UI/eye-button/eye-button.component';
import { BoardComponent } from './components/board/board.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { environment } from 'src/environment/environment';
import { AddTaskModalComponent } from './components/modals/add-task-modal/add-task-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/UI/modal/modal.component';
import { SelectComponent } from './components/UI/select/select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewTaskModelComponent } from './components/modals/view-task-model/view-task-model.component';
import { DeleteTaskModalComponent } from './components/modals/delete-task-modal/delete-task-modal.component';
import { EditTaskModalComponent } from './components/modals/edit-task-modal/edit-task-modal.component';
import { CreateBoardModalComponent } from './components/modals/create-board-modal/create-board-modal.component';
import { EditBoardModalComponent } from './components/modals/edit-board-modal/edit-board-modal.component';
import { DeleteBoardModalComponent } from './components/modals/delete-board-modal/delete-board-modal.component';
import { AddColumnModalComponent } from './components/modals/add-column-modal/add-column-modal.component';
import { SidebarModalComponent } from './components/modals/sidebar-modal/sidebar-modal.component';
import { SpinnerComponent } from './components/UI/svg/spinner/spinner.component';
import { ScrollButtonComponent } from './components/UI/scroll-button/scroll-button.component';
import { ArrowIconComponent } from './components/UI/svg/arrow-icon/arrow-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent,
    LogoIconComponent,
    ButtonComponent,
    DropdownComponent,
    SidebarComponent,
    BoardIconComponent,
    BoardButtonComponent,
    EyeCloseIconComponent,
    EyeButtonComponent,
    BoardComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskModalComponent,
    ModalComponent,
    SelectComponent,
    ViewTaskModelComponent,
    DeleteTaskModalComponent,
    EditTaskModalComponent,
    CreateBoardModalComponent,
    EditBoardModalComponent,
    DeleteBoardModalComponent,
    AddColumnModalComponent,
    SidebarModalComponent,
    SpinnerComponent,
    ScrollButtonComponent,
    ArrowIconComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
