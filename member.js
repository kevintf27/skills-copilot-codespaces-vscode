function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'partials/member.html',
    controller: 'MemberController',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}