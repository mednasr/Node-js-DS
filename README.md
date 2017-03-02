# Node-js-
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. The Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world. 

The Node.js project is supported by the Node.js Foundation. Contributions, policies, and releases are managed under an open governance model. We are also bound by a Code of Conduct.  If you need help using or installing Node.js, please use the nodejs/help issue tracker.

Resources for Newcomers
Official Resources

    Website
    Node.js Help
    Contributing to the project
    IRC (node core development): #node-dev on chat.freenode.net

Unofficial Resources

    IRC (general questions): #node.js on chat.freenode.net. Please see http://nodeirc.info/ for more information regarding the #node.js IRC channel.

Please note that unofficial resources are neither managed by (nor necessarily endorsed by) the Node.js TSC/CTC. Specifically, such resources are not currently covered by the Node.js Moderation Policy and the selection and actions of resource operators/moderators are not subject to TSC/CTC oversight.
Release Types

The Node.js project maintains multiple types of releases:

    Current: Released from active development branches of this repository, versioned by SemVer and signed by a member of the Release Team. Code for Current releases is organized in this repository by major version number. For example: v4.x. The major version number of Current releases will increment every 6 months allowing for breaking changes to be introduced. This happens in April and October every year. Current release lines beginning in October each year have a maximum support life of 8 months. Current release lines beginning in April each year will convert to LTS (see below) after 6 months and receive further support for 30 months.
    LTS: Releases that receive Long-term Support, with a focus on stability and security. Every second Current release line (major version) will become an LTS line and receive 18 months of Active LTS support and a further 12 months of Maintenance. LTS release lines are given alphabetically ordered codenames, beginning with v4 Argon. LTS releases are less frequent and will attempt to maintain consistent major and minor version numbers, only incrementing patch version numbers. There are no breaking changes or feature additions, except in some special circumstances. More information can be found in the LTS README.
    Nightly: Versions of code in this repository on the current Current branch, automatically built every 24-hours where changes exist. Use with caution.

Download

Binaries, installers, and source tarballs are available at https://nodejs.org.

Current and LTS releases are available at https://nodejs.org/download/release/, listed under their version strings. The latest directory is an alias for the latest Current release. The latest LTS release from an LTS line is available in the form: latest-codename. For example: https://nodejs.org/download/release/latest-argon

Nightly builds are available at https://nodejs.org/download/nightly/, listed under their version string which includes their date (in UTC time) and the commit SHA at the HEAD of the release.

API documentation is available in each release and nightly directory under docs. https://nodejs.org/api/ points to the API documentation of the latest stable version.
Verifying Binaries

Current, LTS and Nightly download directories all contain a SHASUM256.txt file that lists the SHA checksums for each file available for download.

The SHASUM256.txt can be downloaded using curl.

$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt

To check that a downloaded file matches the checksum, run it through sha256sum with a command such as:

$ grep node-vx.y.z.tar.gz SHASUMS256.txt | sha256sum -c -

(Where "node-vx.y.z.tar.gz" is the name of the file you have downloaded)

Additionally, Current and LTS releases (not Nightlies) have GPG signed copies of SHASUM256.txt files available as SHASUM256.txt.asc. You can use gpg to verify that the file has not been tampered with.

To verify a SHASUM256.txt.asc, you will first need to import all of the GPG keys of individuals authorized to create releases. They are listed at the bottom of this README under Release Team. Use a command such as this to import the keys:

$ gpg --keyserver pool.sks-keyservers.net --recv-keys DD8F2338BAE7501E3DD5AC78C273792F7D83545D

(See the bottom of this README for a full script to import active release keys)

You can then use gpg --verify SHASUMS256.txt.asc to verify that the file has been signed by an authorized member of the Node.js team.

Once verified, use the SHASUMS256.txt.asc file to get the checksum for the binary verification command above.
Building Node.js

See BUILDING.md for instructions on how to build Node.js from source.
Security

All security bugs in Node.js are taken seriously and should be reported by emailing security@nodejs.org. This will be delivered to a subset of the project team who handle security issues. Please don't disclose security bugs publicly until they have been handled by the security team.

Your email will be acknowledged within 24 hours, and you’ll receive a more detailed response to your email within 48 hours indicating the next steps in handling your report.
Current Project Team Members

The Node.js project team comprises a group of core collaborators and a sub-group that forms the Core Technical Committee (CTC) which governs the project. For more information about the governance of the Node.js project, see GOVERNANCE.md.
CTC (Core Technical Committee)

    addaleax - Anna Henningsen <anna@addaleax.net> (she/her)
    bnoordhuis - Ben Noordhuis <info@bnoordhuis.nl>
    ChALkeR - Сковорода Никита Андреевич <chalkerx@gmail.com> (he/him)
    cjihrig - Colin Ihrig <cjihrig@gmail.com>
    evanlucas - Evan Lucas <evanlucas@me.com> (he/him)
    fishrock123 - Jeremiah Senkpiel <fishrock123@rocketmail.com>
    indutny - Fedor Indutny <fedor.indutny@gmail.com>
    jasnell - James M Snell <jasnell@gmail.com> (he/him)
    mhdawson - Michael Dawson <michael_dawson@ca.ibm.com> (he/him)
    misterdjules - Julien Gilli <jgilli@nodejs.org>
    mscdex - Brian White <mscdex@mscdex.net>
    MylesBorins - Myles Borins <myles.borins@gmail.com> (he/him)
    ofrobots - Ali Ijaz Sheikh <ofrobots@google.com>
    rvagg - Rod Vagg <rod@vagg.org>
    shigeki - Shigeki Ohtsu <ohtsu@iij.ad.jp> (he/him)
    targos - Michaël Zasso <targos@protonmail.com> (he/him)
    thefourtheye - Sakthipriyan Vairamani <thechargingvolcano@gmail.com> (he/him)
    trevnorris - Trevor Norris <trev.norris@gmail.com>
    Trott - Rich Trott <rtrott@gmail.com> (he/him)

Collaborators

    abouthiroppy - Yuta Hiroto <hello@about-hiroppy.com> (he/him)
    ak239 - Aleksei Koziatinskii <ak239spb@gmail.com>
    andrasq - Andras <andras@kinvey.com>
    AndreasMadsen - Andreas Madsen <amwebdk@gmail.com> (he/him)
    bengl - Bryan English <bryan@bryanenglish.com> (he/him)
    benjamingr - Benjamin Gruenbaum <benjamingr@gmail.com>
    bmeck - Bradley Farias <bradley.meck@gmail.com>
    brendanashworth - Brendan Ashworth <brendan.ashworth@me.com>
    bzoz - Bartosz Sosnowski <bartosz@janeasystems.com>
    calvinmetcalf - Calvin Metcalf <calvin.metcalf@gmail.com>
    chrisdickinson - Chris Dickinson <christopher.s.dickinson@gmail.com>
    claudiorodriguez - Claudio Rodriguez <cjrodr@yahoo.com>
    danbev - Daniel Bevenius <daniel.bevenius@gmail.com>
    edsadr - Adrian Estrada <edsadr@gmail.com> (he/him)
    eljefedelrodeodeljefe - Robert Jefe Lindstaedt <robert.lindstaedt@gmail.com>
    estliberitas - Alexander Makarenko <estliberitas@gmail.com>
    eugeneo - Eugene Ostroukhov <eostroukhov@google.com>
    fhinkel - Franziska Hinkelmann <franziska.hinkelmann@gmail.com>
    firedfox - Daniel Wang <wangyang0123@gmail.com>
    geek - Wyatt Preul <wpreul@gmail.com>
    gibfahn - Gibson Fahnestock <gibfahn@gmail.com> (he/him)
    iarna - Rebecca Turner <me@re-becca.org>
    imyller - Ilkka Myller <ilkka.myller@nodefield.com>
    isaacs - Isaac Z. Schlueter <i@izs.me>
    italoacasas - Italo A. Casas <me@italoacasas.com> (he/him)
    iWuzHere - Imran Iqbal <imran@imraniqbal.org>
    JacksonTian - Jackson Tian <shyvo1987@gmail.com>
    jbergstroem - Johan Bergström <bugs@bergstroem.nu>
    jhamhader - Yuval Brik <yuval@brik.org.il>
    joaocgreis - João Reis <reis@janeasystems.com>
    joshgav - Josh Gavant <josh.gavant@outlook.com>
    joyeecheung - Joyee Cheung <joyeec9h3@gmail.com> (she/her)
    julianduque - Julian Duque <julianduquej@gmail.com> (he/him)
    JungMinu - Minwoo Jung <minwoo@nodesource.com> (he/him)
    lance - Lance Ball <lball@redhat.com>
    lpinca - Luigi Pinca <luigipinca@gmail.com> (he/him)
    lxe - Aleksey Smolenchuk <lxe@lxe.co>
    matthewloring - Matthew Loring <mattloring@google.com>
    mcollina - Matteo Collina <matteo.collina@gmail.com> (he/him)
    micnic - Nicu Micleușanu <micnic90@gmail.com> (he/him)
    mikeal - Mikeal Rogers <mikeal.rogers@gmail.com>
    monsanto - Christopher Monsanto <chris@monsan.to>
    not-an-aardvark - Teddy Katz <teddy.katz@gmail.com>
    Olegas - Oleg Elifantiev <oleg@elifantiev.ru>
    orangemocha - Alexis Campailla <orangemocha@nodejs.org>
    othiym23 - Forrest L Norvell <ogd@aoaioxxysz.net> (he/him)
    petkaantonov - Petka Antonov <petka_antonov@hotmail.com>
    phillipj - Phillip Johnsen <johphi@gmail.com>
    piscisaureus - Bert Belder <bertbelder@gmail.com>
    pmq20 - Minqi Pan <pmq2001@gmail.com>
    princejwesley - Prince John Wesley <princejohnwesley@gmail.com>
    qard - Stephen Belanger <admin@stephenbelanger.com> (he/him)
    rlidwka - Alex Kocharin <alex@kocharin.ru>
    rmg - Ryan Graham <r.m.graham@gmail.com>
    robertkowalski - Robert Kowalski <rok@kowalski.gd>
    romankl - Roman Klauke <romaaan.git@gmail.com>
    ronkorving - Ron Korving <ron@ronkorving.nl>
    RReverser - Ingvar Stepanyan <me@rreverser.com>
    saghul - Saúl Ibarra Corretgé <saghul@gmail.com>
    sam-github - Sam Roberts <vieuxtech@gmail.com>
    santigimeno - Santiago Gimeno <santiago.gimeno@gmail.com>
    seishun - Nikolai Vavilov <vvnicholas@gmail.com>
    silverwind - Roman Reiss <me@silverwind.io>
    srl295 - Steven R Loomis <srloomis@us.ibm.com>
    stefanmb - Stefan Budeanu <stefan@budeanu.com>
    tellnes - Christian Tellnes <christian@tellnes.no>
    thekemkid - Glen Keane <glenkeane.94@gmail.com> (he/him)
    thlorenz - Thorsten Lorenz <thlorenz@gmx.de>
    TimothyGu - Timothy Gu <timothygu99@gmail.com> (he/him)
    tunniclm - Mike Tunnicliffe <m.j.tunnicliffe@gmail.com>
    vkurchatkin - Vladimir Kurchatkin <vladimir.kurchatkin@gmail.com>
    whitlockjc - Jeremy Whitlock <jwhitlock@apache.org>
    yorkie - Yorkie Liu <yorkiefixer@gmail.com>
    yosuke-furukawa - Yosuke Furukawa <yosuke.furukawa@gmail.com>

Collaborators (which includes CTC members) follow the COLLABORATOR_GUIDE.md in maintaining the Node.js project.
Release Team

Node.js releases are signed with one of the following GPG keys:

    Colin Ihrig <cjihrig@gmail.com> 94AE36675C464D64BAFA68DD7434390BDBE9B9C5
    Evan Lucas <evanlucas@me.com> B9AE9905FFD7803F25714661B63B535A4C206CA9
    Italo A. Casas <me@italoacasas.com> 56730D5401028683275BD23C23EFEFE93C4CFFFE
    James M Snell <jasnell@keybase.io> 71DCFD284A79C3B38668286BC97EC7A07EDE3FC1
    Jeremiah Senkpiel <fishrock@keybase.io> FD3A5288F042B6850C66B31F09FE44734EB7990E
    Myles Borins <myles.borins@gmail.com> C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8
    Rod Vagg <rod@vagg.org> DD8F2338BAE7501E3DD5AC78C273792F7D83545D

The full set of trusted release keys can be imported by running:

gpg --keyserver pool.sks-keyservers.net --recv-keys 94AE36675C464D64BAFA68DD7434390BDBE9B9C5
gpg --keyserver pool.sks-keyservers.net --recv-keys FD3A5288F042B6850C66B31F09FE44734EB7990E
gpg --keyserver pool.sks-keyservers.net --recv-keys 71DCFD284A79C3B38668286BC97EC7A07EDE3FC1
gpg --keyserver pool.sks-keyservers.net --recv-keys DD8F2338BAE7501E3DD5AC78C273792F7D83545D
gpg --keyserver pool.sks-keyservers.net --recv-keys C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8
gpg --keyserver pool.sks-keyservers.net --recv-keys B9AE9905FFD7803F25714661B63B535A4C206CA9
gpg --keyserver pool.sks-keyservers.net --recv-keys 56730D5401028683275BD23C23EFEFE93C4CFFFE

See the section above on Verifying Binaries for details on what to do with these keys to verify that a downloaded file is official.

Previous releases may also have been signed with one of the following GPG keys:

    Chris Dickinson <christopher.s.dickinson@gmail.com> 9554F04D7259F04124DE6B476D5A82AC7E37093B
    Isaac Z. Schlueter <i@izs.me> 93C7E9E91B49E432C2F75674B0A78B0A6C481CF6
    Julien Gilli <jgilli@fastmail.fm> 114F43EE0176B71C7BC219DD50A3051F888C628D
    Timothy J Fontaine <tjfontaine@gmail.com> 7937DFD2AB06298B2293C3187D33FF9D0246406D
