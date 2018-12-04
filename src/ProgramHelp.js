import React, {Component} from 'react';
import { CssBaseline, Typography } from '@material-ui/core';

class ProgramHelp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <CssBaseline />
                <Typography paragraph>
                Using JBike6
You can specify the mass, location, orientation, and inertia for all the bodies that make up a bike, or you can load a previously saved parameter set from the pull-down menu in the upper left of the window.

You can save all the parameters that describe a particular bike configuration and retrieve them for later use. You may also simply discard them if they do not prove interesting or useful.

Selecting an existing bike design
To select an existing bike design, provided with JBike6 or previously saved by you, simply select one from the pull-down list in the upper-left corner of the main window.

JBike6 will display all of its parameters, draw a stylized diagram of it, and calculate its eigenvalues and plot them.

Calculating and plotting eigenvalues
To calculate and plot the eigenvalues for a bike, click on the ‘Calculate’ button in the upper right of the window. Jbike6 reads all the current bike parameters you have specified, checks them for validity, draws the bike, calculates the eigenvalues, and plots them.

There is an option in the ‘Settings’ menu to turn on and off the display of status messages in MATLAB’s command window while calculating eigenvalues. Turn this on to see what JBike6 is doing while you wait. Turn this off to save a little time during each calculation.

Specifying a new bike design
There are two ways that you can specify a new bike design:

1.      Start from scratch: select ‘Blank’ from the pull-down list of bikes. All the parameter values are zero. Type a new name and all the parameter values that you want. Then save the new design. JBike6 cannot work with a design you enter from scratch until you save it.

2.      Start with an existing design: select any pre-existing design from the pull-down list of bikes. Type a new name and change all the parameter values that you want.

Each number may contain any of the digits 0 through 9, a decimal point, a leading + or - sign, and an 'e' or 'd' preceding a power of 10 scale factor: for example the ASCII text string ‘-1.23e2’ represents the value -123. Read more about precision below.

Until you press the 'calculate' button, all the text-entry controls, such as ‘trail’ and ‘mass’ contain whatever and exactly what you type in there. As soon as you press the 'calculate' button, or otherwise start JBike6 on the task of calculating and plotting the eigenvalues, it reads the contents of each control and uses MATLABs internal ‘str2num’ function to convert it to a an IEEE 64 bit floating point number. That function returns a number if it can, otherwise it returns nothing: the ‘length’ of the variable contents is actually zero.

The calculations required to generate eigenvalues cannot work with variables that contain nothing, and they would report an error if they did, so JBike6 checks for this condition, and when it occurs, sets the value to the 64 bit representation of zero. Then, for completeness, it puts back into that control the ASCII text string representation of that number. So, any field that did not have a valid number, including fields that were blank, get set to '0'.

Saving bike parameters
You can save all the parameters of a particular bike design either with the ‘Save bike’ button, the ‘Save bike parameters’ option of the ‘File’ menu, or by pressing CTRL-S (the ‘Control’ key and the ‘s’ key simultaneously).

When you select ‘Save bike‘, JBike6 writes an ASCII text configuration file that contains all the parameters necessary to describe the bike. The file name always begins with ‘BJini’, contains the bike name that you specify, and ends with an ‘.m’ extension. In order to make the file name usable by JBike6 the next time it starts, it removes periods and parenthesis and replaces blanks with underscore characters. Also to be a valid file name in the MS Windows file system it cannot contain any of the following characters: \ / : * ? ” &lt &gt |, so JBike6 removes them as well.

JBike6 also saves the current gravity constant g and calculated critical speeds in this file, if they exists, but only as comments and will not read them back in. Each time you select a different bike or select ‘Calculate’, JBike6 uses the current value of g, which you can specify, to calculate eigenvalues and the weave and capsize speeds.

When JBike6 starts, it reads all the configuration files it can find and sorts them alphabetically to build the list of available bikes for the pull-down menu. The directory from which JBike6 reads and to which it writes bike configuration files defaults to the JBini_files subdirectory of the program directory: where the JBike6 program files are located. You may change this directory by selecting ‘Set ‘save bike’ directory…’ from the ‘Settings’ menu.

Discarding bike parameters
You may discard changes you make to bike parameters if they do not prove interesting or useful. To discard them, simply select a bike (the same one or a different one) from the pull-down menu or exit JBike6.

Saving settings and styles
There is an option in the ‘Settings’ menu to save all the other settings, such as the forward speeds, the gravitational constant, etc., and styles when JBike6 exits. If you have this setting checked, JBike6 writes all your settings to a configuration file, JBconfig.m. The next time you start JBike6, it will read this file and restore all your settings and styles. Note that JBike6 can only save your settings and styles if you exit by either the ‘Exit’ option in the ‘File’ menu or the ‘Exit’ button. If you exit with the ‘close window’ button at the upper right of the window, MATLAB does not give JBike6 an opportunity to save your settings and styles.

Saving calculated eigenvalues
There is an option in the ‘File’ menu to save the calculated eigenvalues along with their corresponding speeds to a file. When you specify the file name, you can specify either a MATLAB *.mat file or an ASCII text file. After you specify the file name and type, JBike6 writes the eigenvalues and their corresponding speeds to that file in the appropriate format.

You can open a MATLAB *.mat file with the ‘load’ command at the MATLAB command prompt. See the MATLAB help for more details. You can open an ASCII text file in Notepad, Microsoft Excel, or similar application.

<br />
The Parameters
You specify a particular bike configuration by entering certain parameters. For the idealized model of a bike that JBike6 uses, the parameters that you can enter on the main window provide all the information that JBike6 needs to calculate the eigenvalues.

All mass is in kilograms, distance in meters, and speed in meters per second.
You may toggle between angles in degrees or radians by selecting either one from the pull-down menu next to the head angle. JBike6 automatically recalculates the values of all the angle parameters to match the units you choose.

JBike6 treats all parameters as decimal expansions to 16 significant digits. In other words, 72 degrees really means 72.00000000000000 degrees, even though trailing zeros are not shown. Read more about precision below.

The parameters you enter can not be arbitrary. As described below, certain ones have to be nonzero or positive. In order for the model to make physical sense, you have to limit certain ones: keep the mass above the ground, keep wheels from bumping each other, etc.

When JBike6 displays values in its own window, it may truncate some, such as the critical speeds displayed above the eigenvalue plot, in order to fit in the available space, but it displays values in the MATLAB command window with all 16 available digits. Read more about precision below.

JBike6 displays ‘tooltips’ when you hover the cursor over any of the parameter input controls.

Bike Parameters
The wheelbase is the horizontal distance between the hub (or ground contact point) of the front wheel and the rear wheel. The wheelbase can be positive or negative, but not zero, and the magnitude should be greater than sum of wheel radii in order for bike to be physically possible.

The head angle is the angle the head tube (steering axis) makes with the horizontal. A 90° head angle would be vertical. By convention, positive angles are clockwise from the horizontal. Common head angles for road bikes range from 70° to 75°. JBike6 accepts any angle, but angles close to 0° are not practical for steering.

The trail is the horizontal distance from the front hub (or ground contact point) to the point where the steering axis intersects the ground. By convention, positive trail is when the front wheel contact point is behind, toward the rear wheel, the steering axis intersect point.
                </Typography>
                </div>
        );

    }

}

export default ProgramHelp